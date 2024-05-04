import Circling from './Circling';
import UseCaseCirclingContent from './UseCaseCirclingContent';

const UseCaseCircle = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-36 gap-y-8">
        <Circling />
        <UseCaseCirclingContent />
      </div>
    </section>
  );
};
export default UseCaseCircle;
