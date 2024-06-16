import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return( <div style={{height:'100vh'}}>
        <PrettyChatWindow 
            projectId='a39b5597-cef2-4247-954d-b219b560c1ea'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
    </div>);
  };
  export default ChatsPage