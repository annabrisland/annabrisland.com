export default function ProjectHeader({ project, description, roles, img }) {

    const roleList = [];

    roles.forEach(role => {
        roleList.push(
            <p>{role}</p>
        )
    });

    return (
        <section className="project-header">
    <div className="project-info grid">
      <div className="project-title">
        <h1 className="project-name">{project}</h1>
        <h3>{description}</h3>
      </div>
      <div className="roles-list">
        {roleList}
      </div>
    </div>
    <div>
      <img className="cover-img" src={img} alt="Project cover" />
    </div>
  </section>
    )
    
}
