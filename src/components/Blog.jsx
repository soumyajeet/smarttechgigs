import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

function Blog(props) {
    const [blogPosts, setBlogPosts] = useState('');


    useEffect(() => {
        getAllBlogs();
    },[]);

    const getAllBlogs = () => {
        axios.get('/data/blogs.json')
            .then(res => {

                let allBlogs = res.data;
                setBlogPosts(allBlogs);
                console.log(blogPosts)
            })
            .catch((error) => console.error('Error'))
    }


    return (
        <div className="container">
            <h2 className="text-primary">Tech Articles</h2>
            
        </div>
    )


}


export default Blog;