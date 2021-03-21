import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import axios from 'axios';
import { BASE_URL } from '../constants/api';


export default function Results(props) {
    return (
        <Layout>
            <Head title="Results" />
            <Heading content="Results" />
            <div className="card-container" >
                {props.users.map((user, index) => {
                    return (

                        <div className="card" key={user.id}>
                            <h5 >{user.name}</h5>
                            <ul>
                                <li>Username: {user.username}</li>
                                <li>Website: {user.website}</li>
                                <li>Email: {user.email}</li>
                            </ul>
                        </div>

                    )
                })}
            </div>
        </Layout>

    )
}

export async function getStaticProps() {
    let users = [];

    try {
        const response = await axios.get(BASE_URL);
        console.log(response);
        users = response.data;


    } catch (error) {
        console.log(error)
    };

    return {
        props: {
            users: users,
        },
    };
}