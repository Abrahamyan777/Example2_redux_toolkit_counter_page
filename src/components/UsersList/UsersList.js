import React, {Fragment} from 'react';
import css from './usersList.module.css'
import {getUsersAsync} from "../../store/Reduceres/usersReducer";

const UsersList = ({users}) => {

    // console.log(users , 'users')
    // console.log(status , 'status')
    // getUsersAsync()

    return (
        <section className={css.usersListSection}>
            <ul className={css.usersList}>
                {
                    users && users.map(({id,name}) => {
                            return(
                                <Fragment key={id}>
                                    <li>{id}: {name}</li>
                                    <hr/>
                                </Fragment>
                            )
                        })
                }
            </ul>
        </section>


    );
};

export default UsersList;