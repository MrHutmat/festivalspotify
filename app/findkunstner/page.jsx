import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GetAllSongsArtists from "../Components/GetAllSongsArtists";
import { allSavedSongs } from "../utils/allSavedSongs";
import Button from "../Components/Button";
import ModalForAllSongs from "../Components/Modals/ModalForAllSongs";
import OldButtonTest from "../Components/OldButtonTest";
import options from "../api/auth/[...nextauth]/options";

const Dashboard = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }
  console.log(session + "session");

  return (
    <div className="text-white p-10 text-center">
      <h1 className="text-3xl mb-5">Dashboard</h1>
      <p>Welcome to the dashboard</p>
      <p>{JSON.stringify(session)}</p>
      <OldButtonTest />
      <Button buttonText="Open Modal 1" modalContent={<ModalForAllSongs />} />
    </div>
  );
};

export default Dashboard;
