type Props = {}

export default function SidebarHeader({ }: Props) {
    return (
        <h2 className="text-md md:text-3xl text-center font-extrabold font-serif text-text-primary">
            <span className="text-accent-primary">Habit </span>
            <br />
            Tracker
        </h2>
    )
}