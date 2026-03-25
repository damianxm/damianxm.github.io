const PROJECTS = [
  {
    category: "Microservices example with deployment",
    title: "PlanOnMap",
    desc:  "Real-time collaborative map application built on a microservices architecture. It allows users to create new sessions or join existing ones, where they can place markers with descriptions on a shared map and communicate instantly via a real-time chat. The system does not require account registration, as authentication is handled through cookies.",
    image: "",
    emoji: "🗺️",
    demo:  "https://planonmap.damian-m.com/",
    stacks: [
      {
        label: "Backend",
        repo:  "https://github.com/damianxm/planonmap-microservices-backend",
        tags:  ["ASP.NET Core 10", ".NET Aspire", "SignalR", "Entity Framework Core", "PostgreSQL", "RabbitMQ", "MassTransit", "Redis", "YARP"],
      },
      {
        label: "Frontend",
        repo:  "https://github.com/damianxm/planonmap-frontend",
        tags:  ["Angular 21", "TypeScript", "OpenFreeMap", "OpenStreetMap", "Leaflet", "SignalR", "SCSS"],
      },

    ],
  },
];
