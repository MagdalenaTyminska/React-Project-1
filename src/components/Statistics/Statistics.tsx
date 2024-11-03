import scss from './Statistics.module.scss';

type Stats = {
	id: string;
	label: string;
	percentage: number;
};

type StatisticsProps = {
	title: string;
	stats: Stats[];
};

export const Statistics = ({ title, stats }: StatisticsProps) => (
	<section className={scss.statistics}>
		{title && <h2 className={scss.statistics__title}>{title}</h2>}

		<ul className={scss.statistics__statList}>
			{stats.map((stat, index) => (
				<li key={stat.id} className={`${scss.statistics__item} ${index % 2 ? scss.statistics__itemOdd : scss.statistics__itemEven}`}>
					<span className={scss.statistics__label}> {stat.label}</span>
					<span className={scss.statistics__percentage}>{stat.percentage}%</span>
				</li>
			))}
		</ul>
	</section>
);
