import ResumeTemCard from "./ResumeTemplateMat/ResumeTemCard"
const ResumeTemplate = () => {
  return (
    <section className='h-full  flex justify-around flex-wrap items-top pt-12 pb-12' style={{ background: " linear-gradient(125deg, rgba(175,208,254,1) 29%, rgba(234,221,243,1) 58%)", minHeight: "90vh", fontFamily: "sans-serif" }}>
      <ResumeTemCard img={"img/sv (4).jpg"} />
    </section>
  )
}

export default ResumeTemplate