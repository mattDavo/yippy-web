import React from 'react';
import Tab from './Tab';
import blogData from '../content/blog.json';

class BlogTab extends Tab {
    
    renderBlogPost(data) {
        let date = new Date(data.date * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let dateStr = `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`
        
        return (
            <div key={data.id} className="Rounded-box">
                <h3 className="Rounded-box-title">{data.title}</h3>
                <h6 className="Rounded-box-subtitle">{data.author} on {dateStr}</h6>
                <p className="Rounded-box-content">{data.content}</p>
            </div>
        );
    }
    
    renderTab() {
        const blogPosts = blogData.sort((x, y) => {
            return y.date - x.date;
        }).map(this.renderBlogPost);
        
        return (
            <div className="Blog-tab">
                {blogPosts}
            </div>
        );
    }
}

export default BlogTab;
