import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  const { body, title, url_image, url_cover } = res;

  const supabase = createClient();

  const { data, error } = await supabase
    .from('posts')
    .insert({ body, title, url_image, url_cover })
    .select()
    .single();

  return NextResponse.json({ data, error });
}
