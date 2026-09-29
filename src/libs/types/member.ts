import { MemberType } from "../enums/member.enum";
import {ObjectId} from 'mongoose'

export interface Member {
  _id: ObjectId;  
  memberType: MemberType;
  memberStatus: MemberType;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoitns: number;
  createdAt: Date;
  updatedAt: Date;
}


export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberType;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoitns?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}