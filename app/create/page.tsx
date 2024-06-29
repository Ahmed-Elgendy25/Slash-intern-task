import { Metadata } from 'next';
import CreateForm from './CreateForm';
export const metadata: Metadata = {
  title: 'Create your form',
  description: 'Page for creating your form',
};
function page() {
  return (
    <>
      <CreateForm />
    </>
  );
}

export default page;
