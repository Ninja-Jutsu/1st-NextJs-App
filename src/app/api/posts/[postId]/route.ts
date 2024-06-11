import { NextRequest, NextResponse } from 'next/server'
import connectDb from '../../../../config/database'
import PostModel from '../../../../models/post'
import { headers, cookies } from 'next/headers'

interface Params {
  params: {
    postId: number
  }
}

export async function GET(req: NextRequest, { params: { postId } }: Params) {
  console.log(postId)
  cookies().set('theme', 'dark')
  return NextResponse.json({ id: postId }, { status: 200 })
}
