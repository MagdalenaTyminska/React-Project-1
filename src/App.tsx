import user from './components/Profile/profile.json';
import { Profile } from './components/Profile/Profile';
import data from './components/Statistics/statistics.json';
import { Statistics } from './components/Statistics/Statistics';
import friends from './components/FriendsList/friends.json';
import { FriendsList } from './components/FriendsList/FriendsList';

function App() {
	return (
		<>
			<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
			<Statistics title='Upload stats' stats={data} />
			<FriendsList friends={friends} />
		</>
	);
}

export default App;
