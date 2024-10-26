export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // replace purge
  safelist: ['bg-sea1', 'bg-sea2', 'bg-sea3'], // Add your classes here
  theme: {
    extend: {
      backgroundImage: {
        'sea1': 'url("https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'sea2': 'url("https://images.unsplash.com/photo-1428447207228-b396f310848b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'sea3': 'url("https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
      }
    },
  },
  plugins: [],
}
