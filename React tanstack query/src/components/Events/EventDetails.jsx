import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../utils/http";

import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
  const {
    mutate,
    isError: isDeleteError,
    isLoading: isDeleteLoading,
    error: deleteError,
  } = useMutation({
    mutationFn: () => deleteEvent({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  if (isLoading || isDeleteLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <ErrorBlock
        title="Something went wrong"
        message={error.info?.message || "Something went wrong while loading!"}
      />
    );
  }
  if (isDeleteError) {
    return (
      <ErrorBlock
        title="Something went wrong"
        message={
          deleteError.info?.message || "Something went wrong while loading!"
        }
      />
    );
  }

  const handleDeleteEvent = () => {
    mutate({ id });
  };

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDeleteEvent}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={"http://localhost:3000/" + data.image} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date} {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
