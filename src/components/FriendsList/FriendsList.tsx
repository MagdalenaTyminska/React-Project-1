import scss from './FriendsList.module.scss';

type Friends = {
	id: number;
	avatar: string;
	name: string;
	isOnline: boolean;
};

type FriendsProps = {
	friends: Friends[];
};

export const FriendsList = ({ friends }: FriendsProps) => (
	<section className={scss.friends}>
		<ul className={scss.friends__list}>
			{friends.map((friend) => (
				<li className={scss.friends__item} key={friend.id}>
					<span className={friend.isOnline ? scss.friends__online : scss.friends__offline}></span>
					<img className={scss.friends__avatar} src={friend.avatar} alt='User avatar' width='54' />
					<p className={scss.friends__name}>{friend.name}</p>
				</li>
			))}
		</ul>
	</section>
);
