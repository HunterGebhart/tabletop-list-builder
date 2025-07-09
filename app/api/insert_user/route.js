// app/api/insert_user/route.js
import pool from '@/lib/neon_db';

export async function POST(request) {
  // 1️⃣  Parse JSON body
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const { user_id } = body;
  if (!user_id) {
    return Response.json({ message: 'user_id required' }, { status: 400 });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO user_info.users (user_id)
       VALUES ($1)
       ON CONFLICT (user_id) DO NOTHING
       RETURNING *`,
      [user_id]
    );

    if (rows.length === 0) {
      // user already existed
      return Response.json({ message: 'User already exists' }, { status: 200 });
    }

    // new row created
    return Response.json(rows[0], { status: 201 });
  } catch (err) {
    console.error('DB insert error:', err.code, err.detail);
    return Response.json({ message: 'Database insert error' }, { status: 500 });
  }
}