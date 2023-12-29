import classes from './adminPanel.module.scss';
import UserInteraction from './userInteraction/userInteraction';

export default function AdminPanel() {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>ADMIN.BIKE-BOOKING.COM</div>
        <UserInteraction />
        <div className={classes.footer}>
          <span>Developer:&nbsp;</span>Artem Zakharchuk
        </div>
      </div>
    </section>
  );
}
