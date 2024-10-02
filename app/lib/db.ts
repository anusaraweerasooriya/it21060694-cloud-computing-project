import mysql from 'mysql2/promise';

export async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'it21060694-student-db.c7awe66yus7e.ap-south-1.rds.amazonaws.com',
        user: 'it21060694',
        password: 'IT210606940207##',
        database: 'it21060694_student_db',
    });
    return connection;
}
