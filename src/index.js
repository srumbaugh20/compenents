import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Bob" 
                timeAgo="Today at 3:23pm" 
                content="Great idea!" 
                avatar= {faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Max" 
                    timeAgo="Today at 9:47am" 
                    content="I like your thought process" 
                    avatar= {faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Lucy" 
                    timeAgo="Yesterday at 12:11pm" 
                    content="Chicken nuggets are awesome" 
                    avatar= {faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

