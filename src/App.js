import "./styles.css";

export default function App() {
  const data = [
    { County: "County 1", Role: "Role 1", IsChecked: "Y" },
    { County: "County 1", Role: "Role 2", IsChecked: "Y" },
    { County: "County 2", Role: "Role 1", IsChecked: "Y" },
    { County: "County 2", Role: "Role 2", IsChecked: "Y" },
    { County: "County 3", Role: "Role 1", IsChecked: "N" },
    { County: "County 3", Role: "Role 2", IsChecked: "N" },
    { County: "County 4", Role: "Role 1", IsChecked: "Y" },
    { County: "County 4", Role: "Role 2", IsChecked: "Y" }
  ];

  const counties = [...new Set(data.map((item) => item.County))];
  const roles = [...new Set(data.map((item) => item.Role))];

  const countyRoles = counties.map((County) => {
    const row = { County };
    roles.forEach((Role) => {
      const isChecked =
        data.find((item) => item.County === County && item.Role === Role)
          ?.IsChecked || 'N';
      row[Role] = isChecked;
    });
    return row;
  });

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {roles.map((Role) => (
            <th key={Role}>{Role}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {countyRoles.map((row) => (
          <tr key={row.County}>
            <td>{row.County}</td>
            {roles.map((Role) => (
              <td key={`${row.County}_${Role}`}>
              <input type='checkbox' value={row[Role]}/></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
