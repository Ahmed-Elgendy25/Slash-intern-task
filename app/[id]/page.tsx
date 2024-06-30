import Image from 'next/image';

import { createClient } from '@/utils/supabase/server';
import { PostsTyped } from '@/types/type';
import Pagedetails from './Pagedetails';

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = params;
  const supabase = createClient();

  const { data, error } = await supabase
    .from('posts')
    .select()
    .eq('id', id)
    .single();

  return {
    title: data?.title,
  };
}

async function getPostDetails(id: number): Promise<PostsTyped> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('posts')
    .select()
    .eq('id', id)
    .single();
  return data || [];
}

async function BlogDetails({ params }: { params: { id: number } }) {
  const { id } = params;
  const post: PostsTyped = await getPostDetails(id);
  return <Pagedetails post={post} />;
}

export default BlogDetails;
