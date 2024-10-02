import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/app/lib/db';
import { ResultSetHeader } from 'mysql2/promise';

export async function GET() {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM students');
    return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
    const { name, age } = await req.json();
    const connection = await getConnection();
    const [result] = await connection.query<ResultSetHeader>(
        'INSERT INTO students (name, age) VALUES (?, ?)',
        [name, age]
    );
    return NextResponse.json({ id: result.insertId, name, age });
}
