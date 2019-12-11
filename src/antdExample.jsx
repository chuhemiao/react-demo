import  React from "react"
import { Layout,Button,Pagination } from 'antd';


export default class antdExample extends React.Component{
//  antd 的使用
    render(){
        const { Header, Footer, Content } = Layout;
        
        return(
            <div>
                <p>button 例子</p>
                            

                <Layout>
                    <Header>Header</Header>
                    <Content>
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <Button type="dashed">Dashed</Button>
                            <Button type="danger">Danger</Button>
                            <Button type="link">Link</Button>
                            <Pagination defaultCurrent={1} total={50} />
                            <div>
                                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                                <br />
                            </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
               
            </div>
        )
    }
    
}

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}
