export default function ProjectHeader({ project, description, roles, links, img }) {

    const roleList = [];

    roles.forEach(role => {
        roleList.push(
            <p>{role}</p>
        )
    });

    const linkList = [];

    if(links) {
      links.forEach(link => {
        linkList.push(
            <a className="project-link" href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
        )
    }
    );
    }
    
    return (
        <section className="project-header">
    <div className="project-info grid">
      <div className="project-title">
        <h1 className="project-name">{project}</h1>
        <h3>{description}</h3>
      </div>
      <div className="info-list">
      <div className="roles-list">
        {roleList}
      </div>
      <div className="links-list">
        {linkList}
      </div>
      </div>
      
    </div>
    <div>
      <img className="cover-img" src={img} alt="Project cover" />
    </div>
  </section>
    )
    
}
