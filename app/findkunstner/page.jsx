import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Button from "../Components/Button";
import ModalForAllSongs from "../Components/Modals/ModalForAllSongs";
import options from "../api/auth/[...nextauth]/options";
import ModalForPlaylistSelector from "../Components/Modals/ModalForPlaylistSelector";

const Dashboard = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="text-white p-10 text-center">
      <h1 className="text-3xl mb-5">Dashboard</h1>
      <p>Welcome to the dashboard</p>
      <p>{JSON.stringify(session)}</p>
      <Button
        buttonText="Compared your liked songs artists to one of the festivals"
        modalContent={<ModalForAllSongs />}
      />
      <Button
        buttonText="Choose a playlist to check if that hans songs from artists coming"
        modalContent={<ModalForPlaylistSelector />}
      />
    </div>
  );
};

export default Dashboard;
