/* eslint no-console: "warn"*/
import app from './app';

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`);
});
