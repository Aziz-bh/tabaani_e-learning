import React from "react";
import UnfinishedCoursesCard from "components/card/UnfinishedCoursesCard";
import { useSubscribedCourses } from "../../../../hooks/react-query/useCourses";
import { useUserAuth } from "../../../../context/UserAuthContext";

const YourCourses = () => {
  const { user } = useUserAuth();
  const userId = user?.uid;
  const {
    data: subscribedCourses,
    isLoading,
    isError,
  } = useSubscribedCourses(userId);

  if (isLoading) {
    return <div className="bg-white px-24">Loading...</div>;
  }

  if (isError) {
    return <div className="bg-white px-24">Error fetching courses.</div>;
  }

  return (
    <div className="mx-auto bg-white py-10  md:px-11 lg:px-24" id="about">
      <div className="flex items-center justify-between pb-8 pr-2">
        <p className="text-left text-2xl font-bold text-[#000000]">
          YOUR COURSES
        </p>
        <button className="rounded-lg bg-gray-200 px-6 py-2">See All</button>
      </div>
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
        {/* Unfinished courses slider */}
        {subscribedCourses?.courses.map((subscribed, index) => (
          <div key={index} className="pr-2">
            <UnfinishedCoursesCard
              id={subscribed.id}
              title={subscribed.title}
              image={subscribed.image}
              difficulty={subscribed.level}
              instructor={subscribed.instructor.fullName}
              userpic={subscribed.instructor.userpic}
              progress={subscribed.progress}
              lessons={subscribed.chapters.map(
                (chapter) => chapter?.lessons?.length
              )}
              chapters={subscribed?.chapters?.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCourses;
