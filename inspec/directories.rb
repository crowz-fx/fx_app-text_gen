directories = [
  "/var/www/apps/textgen"
]

directories.each do |directoryPath|
  describe file(directoryPath) do
    its('type') { should eq :directory }
    it { should be_directory }
  end
end
