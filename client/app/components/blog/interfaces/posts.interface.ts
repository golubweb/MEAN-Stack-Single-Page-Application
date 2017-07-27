interface Post {
    post_id: number;
    post_name: string;
    post_thumb: string;
    post_thumb_stats: number;
    post_text: string;
    post_content: string;
    post_blog_cat: string;
    post_tags: string;
    post_tags_id: string;
    post_blog_id: number;
    post_author: string;
    post_comment: number
    post_date: Date;
    post_comment_sum: number;
    post_stats: number;
}

export default Post;
