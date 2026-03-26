const PROJECTS = [
  {
    category: "Microservices example with deployment",
    title: "PlanOnMap",
    desc:
           `• Real-time collaborative map application built on microservices architecture
            • Users can create or join map sessions
            • Ability to place markers with descriptions on shared map
            • Real-time chat using SignalR
            • Authentication handled via cookies (no account required)`,
    image: "",
    emoji: "🗺️",
    demo:  "https://planonmap.damian-m.com/",
    stacks: [
      {
        label: "Backend",
        repo:  "https://github.com/damianxm/planonmap-microservices-backend",
        tags:  ["ASP.NET Core 10", ".NET Aspire", "SignalR", "Entity Framework Core", "PostgreSQL", "RabbitMQ", "MassTransit", "Redis", "YARP", "Docker Compose"],
      },
      {
        label: "Frontend",
        repo:  "https://github.com/damianxm/planonmap-frontend",
        tags:  ["Angular 21", "TypeScript", "OpenFreeMap", "OpenStreetMap", "Leaflet", "SignalR", "SCSS"],
      },

    ],
  },
];
