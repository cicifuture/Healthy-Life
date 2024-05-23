import { useRouter } from 'next/router';
import { useGoals } from '../../context/GoalContext';

const GoalDetails: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;

  const { goals } = useGoals();
  const goal = goals.find((goal) => goal.code === code);

  if (!goal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{goal.title}</h1>
      <p>{goal.description}</p>
    </div>
  );
};

export default GoalDetails;
