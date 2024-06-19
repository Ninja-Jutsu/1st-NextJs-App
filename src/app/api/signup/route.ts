import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'
import PostModel from '../../../models/post'
import { MongoClient } from 'mongodb'

export async function GET(request: NextRequest) {
  const client = await MongoClient.connect(process.env.DB_URL)
  const collection = client.db().collection('posts')

  const allPosts = collection.find({})
  // client.close()
  return NextResponse.json(allPosts)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  // const validation = schema.safeParse(body)
  console.log('Reached')

  // if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}
