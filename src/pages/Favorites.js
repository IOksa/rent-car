import { Helmet } from 'react-helmet';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Favorites() {
  return (
   <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <div style={styles.container}>
        <p>Favorites</p>
       </div>
    </>
  );
}