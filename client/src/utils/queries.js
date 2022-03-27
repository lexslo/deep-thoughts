import { gql } from '@apollo/client';

const QUERY_THOUGHTS = gql `
    query thoughts($username: String) {
        thoughts(username: $username) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

const QUERY_THOUGHT = gql `
    query thought($id: ID!) {
        thought(_id: $id) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
`;

const QUERY_USER = gql `
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
            thoughts {
                _id
                thoughtText
                createdAt
                reactionCount
            }
        }
    }
`;

// since no variables are passed can simply name the query
const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            friendCount
            thoughts {
                _id
                thoughtText
                createdAt
                reactionCount
                reactions {
                    _id
                    createdAt
                    reactionBody
                    username
                }
            }
            friends {
                _id
                username
            }
        }
    }
`;

const QUERY_ME_BASIC = gql `
    {
        me {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
        }
    }
`;

export { 
    QUERY_THOUGHTS, 
    QUERY_THOUGHT, 
    QUERY_USER, 
    QUERY_ME, 
    QUERY_ME_BASIC 
};