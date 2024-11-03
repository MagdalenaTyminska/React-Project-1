import scss from './Profile.module.scss';

type Stats = {
	followers: number;
	views: number;
	likes: number;
};

type ProfileProps = {
	username: string;
	tag: string;
	location: string;
	avatar: string;
	stats: Stats;
};

export const Profile = ({ username, tag, location, avatar, stats }: ProfileProps) => (
	<section className={scss.profile}>
		<div className={scss.profile__description}>
			<img src={avatar} alt='User avatar' className={scss.profile__avatar} />
			<p className={scss.profile__name}>{username}</p>
			<p className={scss.profile__tag}>@{tag}</p>
			<p className={scss.profile__location}>{location}</p>
		</div>

		<ul className={scss.profile__stats}>
			<li className={scss.profile__stat}>
				<span className={scss.profile__label}>followers</span>
				<span className={scss.profile__quantity}>{stats.followers}</span>
			</li>
			<li className={scss.profile__stat}>
				<span className={scss.profile__label}>views</span>
				<span className={scss.profile__quantity}>{stats.views}</span>
			</li>
			<li className={scss.profile__stat}>
				<span className={scss.profile__label}>likes</span>
				<span className={scss.profile__quantity}>{stats.likes}</span>
			</li>
		</ul>
	</section>
);
