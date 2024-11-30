import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Button from "../Components/Button";
import ModalForAllSongs from "../Components/Modals/ModalForAllSongs";
import options from "../api/auth/[...nextauth]/options";
import ModalForPlaylistSelector from "../Components/Modals/ModalForPlaylistSelector";
import { LogOutHeader } from "../Components/Login";
import ModalContainer from "../Components/ModalContainer";

const Dashboard = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    //     <div className="text-white p-10 text-center">
    //       <div className="bg-gray-900 text-white min-h-screen">
    //         <header className="p-4 bg-gray-800 flex justify-between items-center">

    // <LogOutHeader />
    //         </header>
    //  <main className="text-center mt-12">
    //         <h2 className="text-3xl font-bold mb-8">
    //           Find Artists for Upcoming Festivals
    //         </h2>
    //         <p className="text-lg mb-6">
    //           Select one of the options below to begin.
    //         </p>

    //         <div className="flex flex-col space-y-6">
    //           <Button
    //             buttonText="Compare your liked songs to festival artists"
    //             modalContent={<ModalForAllSongs />}
    //           />
    //           <Button
    //             buttonText="Choose a playlist to find matching artists"
    //             modalContent={<ModalForPlaylistSelector />}
    //           />
    //         </div>
    //       </main>
    //       </div>

    //       <h1 className="text-3xl mb-5">Dashboard</h1>
    //       <p>Welcome to the dashboard</p>
    //       <p>{JSON.stringify(session)}</p>
    //       <Button
    //         buttonText="Compared your liked songs artists to one of the festivals"
    //         modalContent={<ModalForAllSongs />}
    //       />
    //       <Button
    //         buttonText="Choose a playlist to check if that hans songs from artists coming"
    //         modalContent={<ModalForPlaylistSelector />}
    //       />
    //     </div>

    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="w-full bg-gray-800 p-4 flex justify-between items-center">
        <LogOutHeader />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center mt-12">
        <h2 className="text-3xl font-bold mb-8">Find Artists for Festivals</h2>
        <p className="text-lg mb-6">Select a source and proceed.</p>
        <ModalContainer />
      </main>
    </div>
  );
};

export default Dashboard;
