import user from './components/Profile/profile.json';
import { Profile } from './components/Profile/Profile';
import data from './components/Statistics/statistics.json';
import { Statistics } from './components/Statistics/Statistics';

function App() {
	return (
		<>
			<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
			<Statistics title='Upload stats' stats={data} />
		</>
	);
}

export default App;
