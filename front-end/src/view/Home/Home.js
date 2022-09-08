import { Grid, Pagination } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { Row,  Spinner, Container } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { UserContext } from '../../App'
import Api, { authAxios, endpoints } from '../../configs/Api'
import Item from '../../layout/Item'
import { useStyles } from './Home.style'

const Home = () => {
    // [] la Array '' => String
    const [post, setpost] = useState([])
    const [q] = useSearchParams()
    const [count,setCount] = useState(0)
    const classes = useStyles();
    // chuyển trang
    const [pageOn, setPageOn] = useState(1);
    const [user, dispatch] = useContext(UserContext)

    useEffect(() => {
        const loadpost = async () => {
            let query = ""
            const kw = q.get("kw")
            if (kw !== null)
                query = `kw=${kw}`
            
            // console.info(`${endpoints['posts']}?${query}`)
            const res = await Api.get(`${endpoints['posts']}?${query}`)
            
            let data = res.data.results

            if (kw != null)
                data = data.filter(d => d.content.indexOf(kw) >= 0)

            setpost(data)
            setCount(res.data.count)
        }

        
        loadpost()
    }, [q])

    useEffect(()=>{
        fetchPosts()
    },[])

    const fetchPosts = async (value) => {
        const _path = endpoints["posts"] + (value ? `?page=${value}` : `?page=1`)

        Api.get(_path).then(res => {
            setpost(res.data.results)
            setCount(res.data.count)
            // console.log(count)
        })
    }
   
    const handleChangePage = (event, value) => {
        // console.info(value);
        setPageOn(value);
        fetchPosts(value);
    }

    // useEffect(()=>{
        
    //     handleChangePage()
    // },[])

    
    if(post.length === 0)
        return (
            <Container>
                <p className="text-center">
                    <Spinner variant="info" className={classes.spinner} animation="border" role="status" />
                </p>
            </Container>
            )

    return (
        <Container>
            <h1 className="text-center text-danger">Các dự án kiêu gọi từ thiện</h1>
            <Grid item xs={12} md={12} >
                <Row>
                    {post.map(c => <Item obj={c}  />)}
                </Row>
            </Grid>
            <Grid item xs={12} md={12}  >
                <Pagination count={Math.ceil(count / 3)} page={pageOn} onChange={handleChangePage} className={classes.pagination} size='large' />
            </Grid>
        </Container>
      
    )
}


export default Home