import scss from './Transactions.module.scss';

type Transactions = {
	id: string;
	type: string;
	amount: string;
	currency: string;
};

type TransactionsProps = {
	items: Transactions[];
};

export const Transactions = ({ items }: TransactionsProps) => (
	<section className={scss.transactions}>
		<table className={scss.transactions__table}>
			<thead className={scss.transactions__header}>
				<tr className={scss.transactions__header_row}>
					<th className={scss.transactions__header_cell}>Type</th>
					<th className={scss.transactions__header_cell}>Amount</th>
					<th className={scss.transactions__header_cell}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map((item) => (
					<tr key={item.id} className={scss.transactions__body}>
						<td className={scss.transactions__body_cell}>{item.type}</td>
						<td className={scss.transactions__body_cell}>{item.amount}</td>
						<td className={scss.transactions__body_cell}>{item.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	</section>
);
