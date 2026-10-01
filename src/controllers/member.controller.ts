import { Request, Response } from 'express';
import {T} from '../libs/types/common';
import { MemberInput, LoginInput, Member } from '../libs/types/member';
import MemberService from '../models/Member.service';
import Errors from '../libs/Errors';

const memberService = new MemberService(),
    memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
    // TODO: Tokens AUTHENTICATION
    res.json({member: result});
  } catch (err) {
    console.log("ERROR, signup:", err);
    if(err instanceof Errors ) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
        result = await memberService.login(input);
    // TODO: Tokens AUTHENTICATION

    res.json({member: result});
  } catch (err) {
    console.log("ERROR, signup:", err);
    if(err instanceof Errors ) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};


export default memberController;