import user from './components/Profile/profile.json';
import { Profile } from './components/Profile/Profile';

function App() {
	return (
		<>
			<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
		</>
	);
}

export default App;