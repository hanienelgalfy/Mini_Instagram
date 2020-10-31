import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignIn from '../screens/auth/signIn';
import Feed from '../screens/feed/feed';
import BucketList from '../screens/feed/bucketList';
import Profile from '../screens/feed/profile';
import Post from '../screens/feed/post';

const screens = {
    SignIn: {
        screen: SignIn
    },
    Feed : {
        screen: Feed
    },
    BucketList:{
        screen: BucketList
    }, 
    Profile: {
        screen: Profile
    }, 
    Post: {
        screen: Post 
    }
}

const theStack = createStackNavigator(screens);

export default createAppContainer(theStack);