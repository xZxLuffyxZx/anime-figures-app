import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email and password are required.' },
        { status: 400 }
      );
    }

    const existing = await prisma.users.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'Email already registered.' },
        { status: 400 }
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password_hash,
      },
      select: { id: true, name: true, email: true },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Server error while registering.' },
      { status: 500 }
    );
  }
}