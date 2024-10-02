import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/app/lib/db';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name, age } = await req.json();
    const connection = await getConnection();
    await connection.query('UPDATE students SET name = ?, age = ? WHERE id = ?', [name, age, id]);
    return NextResponse.json({ id, name, age });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const connection = await getConnection();
    await connection.query('DELETE FROM students WHERE id = ?', [id]);
    return NextResponse.json({ message: 'Student deleted' });
}
