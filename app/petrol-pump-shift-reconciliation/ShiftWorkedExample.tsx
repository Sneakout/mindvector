import styles from "./worked-example.module.css";

const payments = [
  ["Cash", 15000, 14800],
  ["UPI", 22000, 22000],
  ["Card", 8500, 8500],
] as const;
const credit = 6000;
const float = 2000;
const money = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
const expected = payments.reduce((total, [, amount]) => total + amount, 0);
const verified = payments.reduce((total, [, , amount]) => total + amount, 0);

export default function ShiftWorkedExample() {
  return (
    <section id="worked-example" className={styles.example} aria-labelledby="worked-example-title">
      <div className={styles.intro}>
        <p className={styles.label}>Worked example · FuelNerve Core</p>
        <h2 id="worked-example-title">A ₹200 cash shortage, traced from nozzle to handover.</h2>
        <p>
          This example uses fictional readings and an illustrative petrol rate.
          It follows the FuelNerve workflow without using customer data.
        </p>
      </div>

      <dl className={styles.readings}>
        <div><dt>Opening meter</dt><dd>12,480 L</dd></div>
        <div><dt>Closing meter</dt><dd>13,000 L</dd></div>
        <div><dt>Test fuel returned</dt><dd>5 L</dd></div>
        <div><dt>Illustrative petrol rate</dt><dd>₹100/L</dd></div>
      </dl>
      <p className={styles.formula}>
        <strong>Metered sales:</strong> (13,000 − 12,480 − 5) L × ₹100/L = {money(expected + credit)}.
        The 5 L used for testing was returned to the tank, so it is not a sale.
      </p>

      <table className={styles.payments}>
        <caption>Compare the sales allocation with what was received</caption>
        <thead>
          <tr><th scope="col">Method</th><th scope="col">Sales allocated</th><th scope="col">Verified receipts</th></tr>
        </thead>
        <tbody>
          {payments.map(([method, allocated, received]) => (
            <tr key={method}>
              <th scope="row">{method}</th><td>{money(allocated)}</td><td>{money(received)}</td>
            </tr>
          ))}
          <tr><th scope="row">Customer credit</th><td>{money(credit)}</td><td>Not collected</td></tr>
        </tbody>
        <tfoot>
          <tr><th scope="row">Total</th><td>{money(expected + credit)}</td><td>{money(verified)}</td></tr>
        </tfoot>
      </table>

      <div className={styles.finding}>
        <h3>What the manager checks</h3>
        <p>
          With {money(float)} in opening float and no other cash movements, a {money(float + payments[0][2])} closing
          cash count means {money(payments[0][2])} came from sales. Enter that amount in the Cash row,
          not the full drawer count. The {money(credit)} on customer credit is still a sale,
          but it is not money received this shift.
        </p>
        <p>
          Expected receipts of {money(expected)} minus verified receipts of {money(verified)} leave
          a <strong>{money(expected - verified)} cash shortage</strong>. Recount the drawer, check for a
          payment recorded under the wrong method, and review any cash handover or deposit.
          Correct the relevant record if you find an error; document any difference that remains
          in Reconciliation.
        </p>
      </div>
    </section>
  );
}
