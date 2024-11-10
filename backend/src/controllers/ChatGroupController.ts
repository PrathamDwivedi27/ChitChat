import { Request,Response } from "express";
import prisma from "../config/db.config.js";


class ChatGroupController {
  static async store(req: Request, res: Response) {
    
    try {
        const body =req.body;       //jo chat group bna rhe uski info
        const user=req.user;

        const chatGroups=await prisma.chatGroup.create({
            data:{
                title:body.title,
                user_id:user.id,
                passcode:body.passcode
            }
        })
        return res.status(200).json({
            message:'Chat group created successfully',
            data:chatGroups
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
    


  }

  static async get(req: Request, res: Response) {
    
    try {
        const body =req.body;       //jo chat group bna rhe uski info
        const user=req.user;

        const data=await prisma.chatGroup.findMany({
            where:{
                user_id:user.id,
            },
            orderBy:{
                created_at:'desc'
            }
        })
        return res.status(200).json({
            message:'All chat groups created by that user',
            data:data
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
    


  }

  //only one chat group
  static async show(req: Request, res: Response) {
    
    try {
        const {id} =req.params;       //jo chat group bna rhe uski info

        const chatGroup=await prisma.chatGroup.findUnique({
            where:{
                id:id
            }
        })
        return res.status(200).json({
            message:'Chat group fetched successfully',
            data:chatGroup
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
    


  }

  static async update(req: Request, res: Response) {
    
    try {
        const {id} =req.params;       
        const body =req.body;       
        const chatGroup=await prisma.chatGroup.update({
            where:{
                id:id
            },
            data:{
                title:body.title,
                passcode:body.passcode
            }
        })
        return res.status(200).json({
            message:'Chat group updated successfully',
            data:chatGroup
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
    


  }

  static async destroy(req: Request, res: Response) {
    
    try {
        const {id} =req.params;       //jo chat group bna rhe uski info

        const chatGroup=await prisma.chatGroup.delete({
            where:{
                id:id
            }
        })
        return res.status(200).json({
            message:'Chat group deleted successfully',
            data:chatGroup
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
    


  }
}

export default ChatGroupController;