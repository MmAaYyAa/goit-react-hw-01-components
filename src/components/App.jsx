import Profile from './Profile/Profile';
import user from '../components/json/user.json';
import Statistics from './Statistics/Statistics';
import data from '../components/json/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../components/json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../components/json/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
